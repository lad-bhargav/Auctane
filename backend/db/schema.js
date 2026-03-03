import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const ProductTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar().notNull(),
  min_price: integer().notNull(),
  description: varchar().notNull(),
  email :varchar().notNull(),
  img : varchar().default("https://imgs.search.brave.com/cRsteCPNxAFAhdEX1YdNH8X1zkWWpz1ND1U6NcTrJdc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYmlkLXNpZ24t/aGFuZC1wZW9wbGUt/YXVjdGlvbi1tZWV0/aW5nLWJ1c2luZXNz/LWJpZGRpbmctcHJv/Y2Vzcy1jb25jZXB0/LXZlY3Rvci1pbGx1/c3RyYXRpb24tZmxh/dF8xNTMwOTctNDM1/Mi5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA"),
});

