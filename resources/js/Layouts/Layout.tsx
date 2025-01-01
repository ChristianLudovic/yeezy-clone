import NavBar from "@/Components/NavBar";

export default function Layout({children}){
    return(
        <>
            <NavBar />
            <main className="px-4">
                {children}
            </main>
        </>
    )
}
