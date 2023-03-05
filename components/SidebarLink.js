import Link from "next/link";

export default function SidebarLink({ href, icon, text, pathname }) {
    return (
        <Link href={href} className={`my-2 flex rounded-md hover:bg-gray-900 ${pathname === href && "bg-gray-900"} transition-colors p-2`}>
            {icon}
            <p className="font-semibold ml-2">{text}</p>
        </Link>
    )
};