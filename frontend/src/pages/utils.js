import { MOCK_DATA } from "./constants";

export const getDataByIds = (ids) => {
  return MOCK_DATA.filter((item) => ids.includes(item.id));
};
