import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { supabase } from "../utils/supabaseClient";
import BookCardType from "../types";
import Layout from "../components/Layout";

const Book: NextPage = () => {
  const [book, setBook] = useState<BookCardType[]>([]);
  const columns: GridColDef[] = [
    { field: "title", headerName: "제목", width: 150 },
    { field: "author", headerName: "작가", width: 150 },
    { field: "publisher", headerName: "출판사", width: 150 },
    { field: "grade", headerName: "평점", width: 150 },
    { field: "created_at", headerName: "일자", width: 150 },
  ];

  const getBooks = async () => {
    const { data, error } = await supabase.from("books").select();
    setBook(data?.reverse());
    console.log(data);
    console.error(error);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Book | Dilrong</title>
      </Head>
      <div style={{ height: "90vh", width: "100%" }}>
        <DataGrid rows={book} columns={columns} />
      </div>
    </Layout>
  );
};

export default Book;
