export type DivisionKey = "mobile" | "shop";

export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  division: DivisionKey;
  message: string;
};
