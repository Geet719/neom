import SettingButton from "./SettingButton";

export default function SettingCard({ data1 }) {
  return (
    <>
      <div
        className={
          data1.btn === null
            ? "  w-[800px] flex items-center justify-between"
            : "  w-[800px] flex flex-col gap-[10px]"}
      >
        <div className="flex flex-col gap-[12px]">
          <p
            style={{ fontFamily: "Brown, sans-serif" }}
            className="text-left text-[14px] leading-[10px] tracking-[0.4px] text-[#222222] opacity-100"
          >
            {data1.text1}
          </p>
          <p
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="text-left text-[12px]  tracking-[0.35px] text-[#222222] opacity-100"
          >
            {data1.text2}
          </p>
        </div>

        {data1.btn === null ? (
          <SettingButton />
        ) : (
          <div className="flex mt-[15px] w-[800px] items-start space-x-10">
            {data1.check === 1 ? (
              <>
                <SettingButton value={2} text="English" />
                <SettingButton value={2} text="French" />
                <SettingButton value={2} text="Arabic" />
              </>
            ) : (
              <>
                <SettingButton value={1} text="Emails" />
                <SettingButton value={1} text="Personalized notifiations" />
                <SettingButton value={1} text="Newsletters" />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
