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