import prismaInstance from "@/utils/prismaInstance";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const allProjects = await prismaInstance.project.findMany();
    if (!allProjects)
      return new NextResponse("No Projects Found", { status: 404 });
    return NextResponse.json(allProjects, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: `Something went wrong, error: ${error}` },
      { status: 500 },
    );
  }
}
