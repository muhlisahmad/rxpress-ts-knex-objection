import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("articles").del();

  // Inserts seed entries
  await knex("articles").insert([
    {
      id: 1,
      title: "title1",
      body: "Lorem ipsum dolor sit amet 1",
      isApproved: false,
    },
    {
      id: 2,
      title: "title2",
      body: "Lorem ipsum dolor sit amet 2",
      isApproved: false,
    },
    {
      id: 3,
      title: "title3",
      body: "Lorem ipsum dolor sit amet 3",
      isApproved: false,
    },
  ]);
}
