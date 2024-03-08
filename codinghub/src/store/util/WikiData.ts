import { atom } from "recoil";
import { WikiInfo } from "../../type/WikiInfo";
import { wikiPages } from "../../dummy";

export const wikiInfoState = atom<WikiInfo[]>({
	key: "wikiInfoState",
	default: wikiPages,
});
