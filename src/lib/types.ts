export interface IBlogPostData {
	readingTime: number;
}

export interface IBlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	readingTime: number;
}

export interface IBlogIndexData {
	posts: IBlogPost[];
}
