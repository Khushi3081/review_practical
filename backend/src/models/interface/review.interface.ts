type RequiredKey<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface ReviewAttributes {
  uuid: string;

  title:string;

  content:string;

  created_at: Date;

  updated_at: Date;

  deleted_at: Date;
}

export type RequiredReviewAttributes = RequiredKey<ReviewAttributes, 'uuid'>;
