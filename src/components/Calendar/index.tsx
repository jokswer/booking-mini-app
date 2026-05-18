import * as React from "react";

const MONTH_NAMES_RU = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
] as const;

const WEEKDAYS_RU = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"] as const;

const BG = "#2c343a";
const MUTED = "#9ca3af";
const WHITE = "#ffffff";
const SELECTION = "#f05023";
const OUTLINE = "rgba(255, 255, 255, 0.55)";
const PAST_OPACITY = 0.38;
const YEAR_RANGE = 1;

function toISOLocalDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfLocalDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function startOfToday(): Date {
  return startOfLocalDay(new Date());
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function sameLocalDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateBeforeLocalDay(a: Date, b: Date): boolean {
  const da = startOfLocalDay(a).getTime();
  const db = startOfLocalDay(b).getTime();
  return da < db;
}

export type CalendarProps = {
  value?: string[];
  defaultValue?: string[];
  onChange?: (dates: string[]) => void;
  onClose?: () => void;
  onAdd?: (dates: string[]) => void;
  /** Начальный отображаемый месяц (по умолчанию — текущий) */
  initialViewDate?: Date;
};

export const Calendar: React.FC<CalendarProps> = ({
  value: valueProp,
  defaultValue,
  onChange,
  onClose,
  onAdd,
  initialViewDate,
}) => {
  const today = startOfToday();

  const isValueControlled = valueProp !== undefined;
  /** value + onChange: выбор управляется родителем; иначе — локальный черновик до onAdd */
  const isFullyControlled = isValueControlled && onChange !== undefined;

  const [draftSelected, setDraftSelected] = React.useState<string[]>(
    () => valueProp ?? defaultValue ?? [],
  );

  const selected = isFullyControlled ? (valueProp ?? []) : draftSelected;

  const setSelected = React.useCallback(
    (next: string[]) => {
      if (!isFullyControlled) {
        setDraftSelected(next);
      }
      onChange?.(next);
    },
    [isFullyControlled, onChange],
  );

  const [viewDate, setViewDate] = React.useState<Date>(() => {
    if (initialViewDate) {
      return new Date(
        initialViewDate.getFullYear(),
        initialViewDate.getMonth(),
        1,
      );
    }
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const y0 = today.getFullYear();
  const yearOptions: number[] = [];
  for (let y = y0; y <= y0 + YEAR_RANGE; y += 1) {
    yearOptions.push(y);
  }

  const minViewMonth = startOfMonth(today);
  const maxYear = yearOptions[yearOptions.length - 1] ?? y0;
  const maxViewMonth = new Date(maxYear, 11, 1);

  const viewMonthFirst = new Date(viewYear, viewMonth, 1);
  const canGoPrev = viewMonthFirst.getTime() > minViewMonth.getTime();
  const nextMonthFirst = new Date(viewYear, viewMonth + 1, 1);
  const canGoNext = nextMonthFirst.getTime() <= maxViewMonth.getTime();

  const goPrevMonth = () => {
    if (!canGoPrev) return;
    setViewDate(new Date(viewYear, viewMonth - 1, 1));
  };

  const goNextMonth = () => {
    if (!canGoNext) return;
    setViewDate(new Date(viewYear, viewMonth + 1, 1));
  };

  const toggleDate = (iso: string, cellDate: Date) => {
    if (isDateBeforeLocalDay(cellDate, today)) {
      return;
    }
    const next = selected.includes(iso)
      ? selected.filter((d) => d !== iso)
      : [...selected, iso].sort();
    setSelected(next);
  };

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const mondayOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  /** Только дни текущего месяца; `null` — пустая ячейка для выравнивания сетки */
  const gridDays: (number | null)[] = [];
  for (let i = 0; i < mondayOffset; i += 1) {
    gridDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    gridDays.push(d);
  }
  const totalCells = mondayOffset + daysInMonth;
  const trailingEmpty = (7 - (totalCells % 7)) % 7;
  for (let i = 0; i < trailingEmpty; i += 1) {
    gridDays.push(null);
  }

  const handleAdd = () => {
    onAdd?.(selected);
  };

  return (
    <div
      style={{
        backgroundColor: BG,
        borderRadius: 18,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minWidth: 280,
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <select
            aria-label="Месяц"
            value={viewMonth}
            onChange={(e) => {
              const m = Number(e.target.value);
              setViewDate(new Date(viewYear, m, 1));
            }}
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              background: "transparent",
              border: "none",
              color: WHITE,
              fontSize: 17,
              fontWeight: 700,
              fontFamily: "inherit",
              cursor: "pointer",
              paddingRight: 4,
              paddingLeft: 0,
              margin: 0,
              maxWidth: 140,
            }}
          >
            {MONTH_NAMES_RU.map((name, idx) => (
              <option key={name} value={idx}>
                {name}
              </option>
            ))}
          </select>
          <select
            aria-label="Год"
            value={viewYear}
            onChange={(e) => {
              const y = Number(e.target.value);
              setViewDate(new Date(y, viewMonth, 1));
            }}
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              background: "transparent",
              border: "none",
              color: WHITE,
              fontSize: 17,
              fontWeight: 700,
              fontFamily: "inherit",
              cursor: "pointer",
              paddingRight: 2,
              margin: 0,
            }}
          >
            {yearOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <IconButton
            label="Предыдущий месяц"
            onClick={goPrevMonth}
            disabled={!canGoPrev}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            label="Следующий месяц"
            onClick={goNextMonth}
            disabled={!canGoNext}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          rowGap: 4,
          columnGap: 4,
        }}
      >
        {WEEKDAYS_RU.map((wd) => (
          <div
            key={wd}
            style={{
              textAlign: "center",
              fontSize: 12,
              fontWeight: 500,
              color: MUTED,
              paddingBottom: 4,
            }}
          >
            {wd}
          </div>
        ))}
        {gridDays.map((day, idx) => {
          if (day === null) {
            return (
              <div
                key={`empty-${idx}`}
                aria-hidden
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  maxWidth: 44,
                  margin: "0 auto",
                }}
              />
            );
          }

          const cellDate = new Date(viewYear, viewMonth, day);
          const iso = toISOLocalDate(cellDate);
          const isPast = isDateBeforeLocalDay(cellDate, today);
          const isToday = sameLocalDay(cellDate, today);
          const isSelected = selected.includes(iso);

          return (
            <button
              type="button"
              key={iso}
              disabled={isPast}
              onClick={() => toggleDate(iso, cellDate)}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1",
                maxWidth: 44,
                margin: "0 auto",
                border: "none",
                background: "transparent",
                cursor: isPast ? "default" : "pointer",
                padding: 0,
                borderRadius: "50%",
                color: WHITE,
                fontSize: 14,
                fontWeight: 500,
                opacity: isPast ? PAST_OPACITY : 1,
                outline: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: isToday && !isSelected ? `inset 0 0 0 1.5px ${OUTLINE}` : "none",
                backgroundColor: isSelected ? SELECTION : "transparent",
              }}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 12,
          paddingTop: 4,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            border: "none",
            background: "transparent",
            color: WHITE,
            fontSize: 15,
            fontWeight: 500,
            padding: "10px 12px",
            cursor: onClose ? "pointer" : "default",
            fontFamily: "inherit",
          }}
        >
          Закрыть
        </button>
        <button
          type="button"
          onClick={handleAdd}
          style={{
            border: "none",
            background: WHITE,
            color: BG,
            fontSize: 15,
            fontWeight: 600,
            padding: "10px 22px",
            borderRadius: 999,
            cursor: onAdd ? "pointer" : "default",
            fontFamily: "inherit",
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

function IconButton({
  children,
  onClick,
  label,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        border: "none",
        background: "transparent",
        color: WHITE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        padding: 0,
        opacity: disabled ? 0.35 : 1,
      }}
    >
      {children}
    </button>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke={MUTED}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
