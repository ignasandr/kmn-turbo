import Image from "next/image";
import Link from "next/link";
import styles from './ui.module.css';

type Props = {
    width?: number,
    height?: number,
    onClick?: (event: React.MouseEvent) => void;
}

export default function Logo({ width = 109, height = 40, onClick }: Props) {
    return (
        <div className={styles.logo} onClick={onClick} >
            <Link href="/" >
                    <Image 
                        src="/kmn-logo.svg"
                        alt="logo"
                        width={width}
                        height={height}
                        priority
                    />
            </Link>
        </div>
    )
}