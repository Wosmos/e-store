export interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}
export interface ArticleGridProps {
  articles: ArticleProps[];
}
export interface MainSectionProps {
  heading: string;
  subheading: string;
  description: string;
  highlight: string;
}
export interface CategoryItemProps {
  title: string;
  backgroundImage: string;
  className?: string;
}
export interface LinkWithArrowProps {
  text: string;
  href: string;
  textColor: string;
  lineColor: string;
  arrowDirection: "left" | "right";
  icon?: React.ReactNode;
}

export interface ProductData {
  id: number;
  isNew?: boolean;
  discount?: number;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
}
export interface ProductProps {
  isNew?: boolean;
  discount?: number;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
}
export interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

export interface TimerBoxProps {
  value: number;
  label: string;
}
export interface ArticleProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  linkText: string;
  linkHref: string;
}

export interface SaleBannerProps {
  saleEndDate?: string | Date | number;
  bannerImage: string;
  promotionText?: string;
  title: string;
  description:  string;
  discountPercentage?: number;
  linkText: string;
  linkHref: string;
}
