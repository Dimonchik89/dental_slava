'use client'

import Image from "next/image";
import logo from "../../images/dental_logo.jpg"
import Link from "next/link"

const HeaderLogo = () => {

    return (
        <div>
            <Link href="/">
                <Image
                    src={logo}
                    alt={"logo"}
                    width={90}
                    height={90}
                />
            </Link>
        </div>
    )
}
export default HeaderLogo;