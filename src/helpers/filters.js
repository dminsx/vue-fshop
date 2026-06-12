const category = [
  { id: "Smartphone", label: "Smartphone" },
  { id: "Laptop", label: "Laptop" },
  { id: "Tablet", label: "Tablet" },
  { id: "Headphones", label: "Headphones" },
  { id: "Smartwatch", label: "Smartwatch" },
  { id: "TV", label: "TV" },
  { id: "Gaming Console", label: "Gaming Console" },
  { id: "Camera", label: "Camera" },
  { id: "Monitor", label: "Monitor" },
  { id: "Keyboard", label: "Keyboard" },
  { id: "Mouse", label: "Mouse" },
  { id: "Speaker", label: "Speaker" },
  { id: "Router", label: "Router" },
  { id: "SSD", label: "SSD" },
  { id: "Power Bank", label: "Power Bank" },
  { id: "Drone", label: "Drone" },
  { id: "Video Card", label: "Video Card" },
];

const color = [
  { id: "Black", label: "Black" },
  { id: "White", label: "White" },
  { id: "Blue", label: "Blue" },
  { id: "Gray", label: "Gray" },
  { id: "Silver", label: "Silver" },
  { id: "Pink", label: "Pink" },
  { id: "Orange", label: "Orange" },
];

const material = [
  { id: "aluminum", label: "Aluminum" },
  { id: "glass", label: "Glass" },
  { id: "metal", label: "Metal" },
  { id: "plastic", label: "Plastic" },
  { id: "carbon", label: "Carbon" },
];

const country = [
  { id: "China", label: "China" },
  { id: "Vietnam", label: "Vietnam" },
  { id: "Japan", label: "Japan" },
  { id: "South Korea", label: "South Korea" },
  { id: "Malaysia", label: "Malaysia" },
  { id: "Taiwan", label: "Taiwan" },
];

const guarantee = [
  { id: "1 year", label: "1 year" },
  { id: "2 year", label: "2 year" },
  { id: "3 year", label: "3 year" },
  { id: "3 years", label: "3 years" },
];

const inStock = [
  { id: true, label: "In Stock" },
  { id: false, label: "Out of Stock" },
];

const isPopular = [
  { id: true, label: "Popular" },
  { id: false, label: "Not Popular" },
];

export const filtersOptions = {
    category,
    color,
}

export const OPTIONS_LABELS = {
    category: 'Категория товара',
    color: 'Цвет товара',
}