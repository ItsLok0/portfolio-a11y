import Link from "next/link";
import NavLinks from "@/app/ui/components/nav-links";

export default function Header() {
    return (
        <header className="sticky top-0 bg-bg-page border-b-2 border-primary">
            <NavLinks />
        </header>
    );
}