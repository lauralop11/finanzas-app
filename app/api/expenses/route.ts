import { neon } from '@neondatabase/serverless';
import { NextResponse } from "next/server";

export async function GET() {
   const sql = neon(`${process.env.DATABASE_URL}`);
   try {
    const res = await sql `SELECT * FROM expenses;`;
    return NextResponse.json(res);
   }
    catch (error) {
      console.error('Error fetching data:', error);
      return; 
    }
  };

export async function POST (request: Request) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try { 
    const req = await request.json();
    const res = await sql `INSERT INTO expenses (data) VALUES (${req}) RETURNING *;`;
    return NextResponse.json (res);
  } catch (error) {
    console.error ('Error adding expense:', error);
    return  NextResponse.json(
      { error: "Error adding expense" },
      { status: 500 }
    );
  }
}