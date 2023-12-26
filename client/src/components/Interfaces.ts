// Utils
export  const TagColor: Record<string, string> = {
    red: '#ff5154',
    orange: '#fc7a1e',
    yellow: '#ffd447',
    green: '#0cf574',
    blue: '#254e70',
    purple: '#9448bc'
};

// components/Item.tsx
export interface ItemProp {
    title: string;
    tags?: Tags[];
    dueDate?: Date;
}

export interface Tags {
    tag: string;
    color: string;
}

// componenets/Input.tsx
export interface InputProps {
    title: string;
    type: string;
    required?: boolean;
    actionItem?: boolean;
}

// components/Links.tsx
export interface Link {
    title: string;
    link: string;
}

export interface LinkProps {
    links: Link[];
}

