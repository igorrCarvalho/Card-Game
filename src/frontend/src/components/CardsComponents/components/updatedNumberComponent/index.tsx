import { ArrowBigRightDash } from "lucide-react";

export default function UpdatedNumberComponent({ upgradedStat }: { upgradedStat: number }) {
    return (
        <>
            <span className="text-[#DAA520]  flex flex-col gap-1 text-xs mt-[-13px] mr-[-5px]">
                <span>
                    <span>x</span>
                    <span>20%</span>
                </span>
                <span className="mt-[-8px] w-1 h-1">
                    <ArrowBigRightDash strokeWidth={1.5} />
                </span>
            </span>
            <span className="text-orange-700">
                {upgradedStat}
            </span>
        </>
    );
}
