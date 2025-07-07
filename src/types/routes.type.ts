export interface Route {
	name: string;
	href?: string;
	superAdmin?: boolean;
	protected?: boolean;
	children?: Route[];
}
