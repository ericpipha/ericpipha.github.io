type publication = { 
    date: Date; 
    title: string; 
    status: string;
    location?: string; 
    abstract: string; 
    img_url?: string; 
    url?: string; 
    img_description?: string;
    authors?: author[];
    pdf?: string;
};
