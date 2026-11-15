/** Decoded copy-link state. `shareRaw` keeps the token's premium string (e.g. "2p5"). */
export interface ITokenState {
	lang: string;
	mode: 'committed' | 'graduated';
	committed: number;
	actual: number;
	shareRaw: string;
}

/** Raw calculator input strings, used when encoding a copy-link token. */
export interface ITokenInput {
	lang: string;
	mode: 'committed' | 'graduated';
	committedInput: string;
	actualInput: string;
	shareInput: string;
}
