import dayjs from "dayjs";

export const formatDate = (dateString) => {
  return dayjs(dateString).format("D MMMM YYYY");
};
