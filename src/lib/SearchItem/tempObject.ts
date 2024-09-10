export type Item = {
    id: number;
    name: string;
    category: string;
    description: string;
};

export const itemList = {
    items: [
        {id: 1, name: 'Laptop', category: 'Electronics', description: 'A high-performance laptop.'},
        {id: 2, name: 'Chair', category: 'Furniture', description: 'Comfortable office chair.'},
        {id: 3, name: 'Coffee Mug', category: 'Kitchen', description: 'A ceramic mug for coffee.'},
        {id: 4, name: 'Smartphone', category: 'Electronics', description: 'Latest smartphone model.'},
        {id: 5, name: 'Desk', category: 'Furniture', description: 'Wooden office desk.'},
    ],

    search: function (query: string): Item[] {
        return this.items.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
    }
};