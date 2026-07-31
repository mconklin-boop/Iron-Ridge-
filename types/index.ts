export type DivisionKey = "mobile" | "shop" | "logistics";

export type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  division: DivisionKey;
  message: string;
};
