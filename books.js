import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://hneuegdqofiksjrylcfw.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZXVlZ2Rxb2Zpa3NqcnlsY2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MTQ5ODIsImV4cCI6MjA1NzM5MDk4Mn0.APK-aJXdeDoH4SVp_N3G1g3dHuhyIr9SVhvsyjWP1Ek'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  let bookList = document.getElementById('books');
  
  for (let book of books) {
     bookList.innerHTML += `<tr><td>${book.Title}</td><td>${book.created_at}</td></tr>`;
   }
}

getBooks();