import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col h-screen relative bg-gray-200">
      <header id={"header_id"} className='bg-gray-700 shadow border-b-0 mb-2 border-gray-400'>

        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="left-header flex gap-10 h-[60px]">

              <div className="app__logo flex items-center">
                <h2 className='text-3xl font-bold'>Ortho</h2>
              </div>
              <div className="menu-item flex gap-4">
                <div className="h-full flex items-center hover:text-blue-500 cursor-pointer">
                  <span className=''>Workbench</span>
                </div>
                <div className="h-full flex items-center">
                  <span className='hover:text-blue-500'>Patient</span>
                </div>
                <div className="h-full flex items-center">
                  <span className='hover:text-blue-500'>Patient</span>
                </div>
              </div>
            </div>
            <div className="__header-right-tabs flex items-center gap-2">
              <div className="_header-search relative rounded-full border-2 border-blue-400 px-2 py-2 bg-gray-200 text-gray-800">
                <input type="text" className='outline-none bg-transparent px-7 w-full' />
                <div className="search-icon absolute top-0 h-full flex items-center">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="full" xmlns="http://www.w3.org/2000/svg"><path d="M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29V19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z"></path></svg>
                </div>
              </div>

              <div className="header-guide">
                <div className="tooltips--6cec31 p-1 rounded hover:bg-gray-300 cursor-pointer">
                  <img id="light-white-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjIwOCAxOS43NzZIOC44NDAwMkM4LjUwNDAyIDE5Ljc3NiA4LjIxNjAyIDIwLjA2NCA4LjIxNjAyIDIwLjRDOC4yMTYwMiAyMC43MzYgOC41MDQwMiAyMS4wMjQgOC44NDAwMiAyMS4wMjRIMTMuMjA4QzEzLjU0NCAyMS4wMjQgMTMuODMyIDIwLjczNiAxMy44MzIgMjAuNEMxMy44MzIgMjAuMDE2IDEzLjU0NCAxOS43NzYgMTMuMjA4IDE5Ljc3NlpNOS44NDgwMiAyMy4wNEM5Ljk0NDAyIDIzLjYxNiAxMC40MjQgMjQgMTEgMjRDMTEuNTc2IDI0IDEyLjA1NiAyMy41NjggMTIuMTUyIDIzLjA0QzEyLjkyIDIyLjk5MiAxMy40OTYgMjIuMzY4IDEzLjQ5NiAyMS42SDguNTA0MDJDOC41MDQwMiAyMi4zNjggOS4xMjgwMiAyMi45OTIgOS44NDgwMiAyMy4wNFpNMTEgMy41NTJDMTEuNDMyIDMuNTUyIDExLjgxNiAzLjE2OCAxMS44MTYgMi43MzZWMC44MTZDMTEuODE2IDAuMzg0IDExLjQzMiAwIDExIDBDMTAuNTY4IDAgMTAuMTg0IDAuMzg0IDEwLjE4NCAwLjgxNlYyLjczNkMxMC4xODQgMy4xNjggMTAuNTY4IDMuNTUyIDExIDMuNTUyWk01LjYyNDAyIDQuNzUyQzUuNzY4MDIgNC45OTIgNi4wNTYwMiA1LjA4OCA2LjI5NjAyIDUuMDg4QzYuNDQwMDIgNS4wODggNi42MzIwMiA1LjA0IDYuNzc2MDIgNC45NDRDNy4xNjAwMiA0LjY1NiA3LjIwODAyIDQuMTc2IDYuOTY4MDIgMy43OTJMNS44NjQwMiAyLjI1NkM1LjU3NjAyIDEuODcyIDUuMDk2MDIgMS44MjQgNC43MTIwMiAyLjA2NEM0LjMyODAyIDIuMzUyIDQuMjgwMDIgMi44MzIgNC41MjAwMiAzLjIxNkw1LjYyNDAyIDQuNzUyWk0zLjYwODAyIDcuNDg4TDEuNzg0MDIgNi45MTJDMS4zNTIwMiA2Ljc2OCAwLjg3MjAyMSA3LjAwOCAwLjcyODAyMSA3LjQ0QzAuNTg0MDIxIDcuODcyIDAuODI0MDIxIDguMzUyIDEuMjU2MDIgOC40OTZMMy4wODAwMiA5LjA3MkMzLjE3NjAyIDkuMDcyIDMuMjcyMDIgOS4xMiAzLjM2ODAyIDkuMTJDMy43MDQwMiA5LjEyIDQuMDQwMDIgOC44OCA0LjEzNjAyIDguNTQ0QzQuMjgwMDIgOC4xMTIgNC4wNDAwMiA3LjYzMiAzLjYwODAyIDcuNDg4Wk0yMC42OTYgMTMuMDU2TDE4Ljg3MiAxMi40OEMxOC40NCAxMi4zMzYgMTcuOTYgMTIuNTc2IDE3LjgxNiAxMy4wMDhDMTcuNjcyIDEzLjQ0IDE3LjkxMiAxMy45MiAxOC4zNDQgMTQuMDY0TDIwLjE2OCAxNC42NEMyMC4yNjQgMTQuNjg4IDIwLjM2IDE0LjY4OCAyMC40MDggMTQuNjg4QzIwLjc0NCAxNC42ODggMjEuMDggMTQuNDQ4IDIxLjE3NiAxNC4xMTJDMjEuMzY4IDEzLjY4IDIxLjEyOCAxMy4yIDIwLjY5NiAxMy4wNTZaTTMuMTI4MDIgMTIuNDhMMS4zMDQwMiAxMy4wNTZDMC44NzIwMjEgMTMuMiAwLjYzMjAyMSAxMy42OCAwLjc3NjAyMSAxNC4xMTJDMC44NzIwMjEgMTQuNDQ4IDEuMjA4MDIgMTQuNjg4IDEuNTQ0MDIgMTQuNjg4QzEuNjQwMDIgMTQuNjg4IDEuNzM2MDIgMTQuNjg4IDEuNzg0MDIgMTQuNjRMMy42MDgwMiAxNC4wNjRDNC4wNDAwMiAxMy45MiA0LjI4MDAyIDEzLjQ0IDQuMTM2MDIgMTMuMDA4QzMuOTkyMDIgMTIuNTc2IDMuNTYwMDIgMTIuMzM2IDMuMTI4MDIgMTIuNDhaTTE4LjYzMiA5LjEyQzE4LjcyOCA5LjEyIDE4LjgyNCA5LjEyIDE4Ljg3MiA5LjA3MkwyMC42OTYgOC40OTZDMjEuMTI4IDguMzUyIDIxLjM2OCA3Ljg3MiAyMS4yMjQgNy40NEMyMS4wOCA3LjAwOCAyMC42IDYuNzY4IDIwLjE2OCA2LjkxMkwxOC4zNDQgNy40ODhDMTcuOTEyIDcuNjMyIDE3LjY3MiA4LjExMiAxNy44MTYgOC41NDRDMTcuOTYgOC44OCAxOC4yOTYgOS4xMiAxOC42MzIgOS4xMlpNMTYuMTg0IDIuMjU2TDE1LjA4IDMuNzkyQzE0Ljc5MiA0LjE3NiAxNC44ODggNC42NTYgMTUuMjcyIDQuOTQ0QzE1LjQxNiA1LjA0IDE1LjYwOCA1LjA4OCAxNS43NTIgNS4wODhDMTUuOTkyIDUuMDg4IDE2LjI4IDQuOTkyIDE2LjQyNCA0Ljc1MkwxNy41MjggMy4yMTZDMTcuODE2IDIuODMyIDE3LjcyIDIuMzUyIDE3LjMzNiAyLjA2NEMxNi45NTIgMS43NzYgMTYuNDI0IDEuODcyIDE2LjE4NCAyLjI1NlpNMTEgNC44NDhDNy43MzYwMiA0Ljg0OCA1LjA0ODAyIDcuNDg4IDUuMDQ4MDIgMTAuOEM1LjA0ODAyIDEyLjE5MiA1LjUyODAyIDEzLjQ0IDYuMjk2MDIgMTQuNDQ4QzYuOTY4MDIgMTUuMzEyIDcuNjQwMDIgMTYuMjcyIDguMjE2MDIgMTcuMjhWMTkuMjQ4SDEzLjY0VjE3LjMyOEMxNC4yMTYgMTYuMzY4IDE0LjkzNiAxNS4zMTIgMTUuNjA4IDE0LjQ0OEMxNi40MjQgMTMuNDQgMTYuODU2IDEyLjE5MiAxNi44NTYgMTAuOEMxNi45NTIgNy41MzYgMTQuMjY0IDQuODQ4IDExIDQuODQ4Wk05Ljk0NDAyIDcuNTM2QzguNzQ0MDIgNy41MzYgNy43MzYwMiA4LjQ5NiA3LjczNjAyIDkuNjk2QzcuNzM2MDIgOS44ODggNy41OTIwMiAxMC4wMzIgNy40MDAwMiAxMC4wMzJDNy4yMDgwMiAxMC4wMzIgNy4wNjQwMiA5Ljg4OCA3LjA2NDAyIDkuNjk2QzcuMDY0MDIgOC4xMTIgOC4zNjAwMiA2LjgxNiA5Ljk0NDAyIDYuODE2QzEwLjEzNiA2LjgxNiAxMC4yOCA2Ljk2IDEwLjI4IDcuMTUyQzEwLjI4IDcuMzkyIDEwLjEzNiA3LjUzNiA5Ljk0NDAyIDcuNTM2WiIgZmlsbD0iI0Y0Qjc0MCIvPgo8L3N2Zz4K"
                  />
                </div>
              </div>

              <div className="header-change-language">
                <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                  <span className='font-bold'>

                    En
                  </span>
                </div>
              </div>

              <div className="header-user-avatar">
                <div className="relative box-border rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center hover:bg-gray-300 cursor-pointer z-20">
                  <img src="data:image/png;base64,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" className="rounded-full shadow hover:shadow-xl z-10 h-7 w-7"></img>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='flex bg-gray-200'>
        hello
      </section>
    </main>
  )
}
