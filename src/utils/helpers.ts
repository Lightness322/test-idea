import { ICurrency } from "../types/Currency";

export function formatTime(time: string) {
  return time.length > 4 ? time : "0" + time;
}

export function formatStopsName(quantity: number) {
  const quantityString = quantity.toString();
  const lastChar = quantityString[quantityString.length - 1];

  if (lastChar === "1" && quantityString !== "11") {
    return "ПЕРЕСАДКА";
  }

  if (lastChar === "2" && quantityString !== "12") {
    return "ПЕРЕСАДКИ";
  }

  if (lastChar === "3" && quantityString !== "13") {
    return "ПЕРЕСАДКИ";
  }

  if (lastChar === "4" && quantityString !== "14") {
    return "ПЕРЕСАДКИ";
  }

  return "ПЕРЕСАДОК";
}

export function formatDate(inputDate: string) {
  const dateObj = new Date(
    inputDate.replace(/(\d{2})\.(\d{2})\.(\d{2})/, "20$3-$2-$1"),
  );

  const formattedDate = dateObj
    .toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(" г.", "");

  const weekday = dateObj.toLocaleDateString("ru-RU", {
    weekday: "short",
  });
  return formattedDate + ", " + weekday[0].toUpperCase() + weekday.slice(1);
}

export function formatPrice(price: number) {
  const roundedPrice = +price.toFixed(0);
  return new Intl.NumberFormat("ru-RU").format(roundedPrice);
}

export function currencySymbol(selectedCurrency: ICurrency) {
  switch (selectedCurrency) {
    case "RUB":
      return "₽";
    case "USD":
      return "$";
    case "EUR":
      return "€";
  }
}
