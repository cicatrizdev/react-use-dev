interface UseSearchOptions {
	initialValue?: string;
	debounceMs?: number;
	minLength?: number;
	caseSensitive?: boolean;
	trimWhitespace?: boolean;
}

interface UseSearchResult {
	searchTerm: string;
	debouncedSearchTerm: string;
	setSearchTerm: (value: string) => void;
	clearSearch: () => void;
	isSearching: boolean;
	hasSearchTerm: boolean;
	isValidSearch: boolean;
	searchInText: (text: string) => boolean;
	searchInArray: <T>(array: T[], getSearchableText: (item: T) => string) => T[];
}
