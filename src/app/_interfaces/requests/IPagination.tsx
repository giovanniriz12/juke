export interface IPagination {
  offset: number;
  limit: number;
}

export interface IPaginationComponent {
  onClickPrevOrNextPage: (type: string | number) => void;
  paginationData: (string | number)[];
  totalPage: number;
}
