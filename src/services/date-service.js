import { format, toDate } from "date-fns";
const formatarDataComHora = (data) => {
  if (!data) return;

  let formatoData = "dd/MM/yyyy HH:mm:ss";

  return format(toDate(data), formatoData);
};

export const dateService = { formatarDataComHora };
