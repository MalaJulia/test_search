import { axiosService } from "./axiosService";
import { urls } from "../configs";

const searchService = {
  Search: ({ q = "a", sort = "created", order = "desc", page = 1 }) =>
    axiosService.get(urls.search, { params: { q, sort, order, page } }),
};

export { searchService };
