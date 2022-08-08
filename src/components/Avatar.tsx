import styles from './Avatar.module.css'

interface AvatarProps {
    
    // Error: When the prop is optional add "?" at the end
    hasBorder?: boolean;
    src: string;
}

export function Avatar({hasBorder = true, src}: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
        />
    )
}

