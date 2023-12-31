import { getDonationRequest } from "@/api/donation/donationRequest";
import { Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

type Donation = {
  id: number;
  title: string;
  logo: string;
  image_banner: string;
  description: string;
};

const ListDonations = () => {
  const router = useRouter();
  const {
    data: listDonation,
    isLoading,
    isError,
  } = useQuery(["/donations"], () => getDonationRequest());
  return (
    <>
      <div className="max-w-xl">
        {/* <div className="flex justify-center bg-[#005CAC] max-w-xl w-full p-4">
          <h3 className="text-white text-center text-[17px] not-italic font-semibold leading-[21px]">
            Quyên góp
          </h3>
        </div> */}
        <div className="flex flex-col gap-[10px] justify-between">
          <div className="flex flex-col gap-2 justify-between bg-white p-4 border border-y-[1px] border-solid">
            <h3 className="text-black text-[18px] not-italic font-semibold leading-[27px]">
              Sứ Mệnh Yêu Thương - Kết nối trái tim, lan tỏa hạnh phúc
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-black text-[16px] not-italic font-normal leading-[24px]">
                &ldquo;Sứ Mệnh Yêu Thương&ldquo; là nền tảng ý nghĩa giúp bạn dễ
                dàng chung tay quyên góp cho những hoàn cảnh khó khăn, được Lịch
                Việt phối hợp với các tổ chức thiện nguyện uy tín, đảm bảo rõ
                ràng và minh bạch
              </p>
              <Image
                src="/images/donation.png"
                width={138}
                height={138}
                alt="Picture of the author"
              />
            </div>
            <div>
              <Link
                className="text-[#007AFF] text-[16px] not-italic font-medium leading-4 underline underline-offset-4"
                href={"/terms"}
              >
                Điều khoản & chính sách
              </Link>
            </div>
          </div>
          {isLoading || isError ? (
            <div className="flex flex-col gap-2 justify-between bg-white p-4 border border-solid">
              <Skeleton active />
            </div>
          ) : (
            <div>
              {listDonation?.length > 0 &&
                listDonation?.map((item: Donation) => (
                  <div
                    key={item?.id}
                    className="flex flex-col gap-4 justify-between bg-white p-4"
                  >
                    <div
                      className="flex flex-col gap-4 justify-between"
                      onClick={() => router.push(`donation-detail/${item?.id}`)}
                    >
                      <div className="flex justify-center border rounded-lg relative z-1 max-w-screen-xl h-[227px]">
                        <Image
                          src={item?.image_banner}
                          layout="fill"
                          objectFit="cover"
                          alt="banner"
                          className="rounded-lg"
                          priority
                        />
                      </div>

                      <h3 className="text-black text-[18px] not-italic font-semibold leading-[27px]">
                        {item?.description}
                      </h3>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                      <Image
                        src={item?.logo}
                        width={42}
                        height={42}
                        alt="Donation"
                        className="rounded-full"
                      />
                      <h3 className="text-black text-[18px] not-italic font-medium leading-[27px]">
                        {item?.title}
                      </h3>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        type="button"
                        className="w-1/2 text-center text-white bg-[#3F85FB] hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 uppercase"
                        onClick={() =>
                          router.push(`donation-detail/${item?.id}`)
                        }
                      >
                        Quyên góp
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListDonations;
