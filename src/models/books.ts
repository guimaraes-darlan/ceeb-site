export type BookModel = {
  id?: string;
  name: string;
  author: string;
  writer?: string;
  code: string;
  edition?: string;
  borrow: boolean;
  sync: boolean;
}

export type BooksModel = BookModel[];