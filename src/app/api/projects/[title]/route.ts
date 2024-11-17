import prismaInstance from "@/utils/prismaInstance";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { title: string } },
) {
  try {
    const { title } = await params;
    const project = await prismaInstance.project.findFirst({
      where: { title: title },
    });
    if (!project)
      return NextResponse.json("Project not found", { status: 404 });
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: `Something went wrong, error: ${error}` },
      { status: 500 },
    );
  }
}
