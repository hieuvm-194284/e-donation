import { useRouter } from "next/router";
const Terms = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between bg-[#005CAC] max-w-xl w-full p-4">
        <button type="button" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 12.5L16.5 2L18.5 4L10 12.5L18.5 21L16.5 23L6 12.5Z"
              fill="white"
            />
          </svg>
        </button>

        <h3 className="text-white text-[17px] not-italic font-semibold leading-[21px]">
          Điều khoản sử dụng
        </h3>

        <div className="w-6"></div>
      </div>
      <div className="flex flex-col max-w-xl bg-white text-base text-black text-justify gap-4 p-4">
        <div>
          <p>
            Xin vui lòng đọc kỹ trước khi quyết định Quyên góp. Khi truy cập, sử
            dụng tính năng Quyên góp của Lịch Việt trên Website/Ứng dụng Lịch
            Việt có nghĩa là Người ủng hộ đồng ý với các điều khoản này. Các
            điều khoản có thể được sửa đổi, bổ sung bởi Lịch Việt tùy từng thời
            điểm. Các thay đổi có hiệu lực ngay khi được đăng tải trên Website/
            Ứng dụng Lịch Việt mà không cần thông báo trước.
          </p>
        </div>
        <div>
          <p className="font-bold">1. Phạm vi áp dụng</p>
          <p>
            Áp dụng cho tính năng Quyên góp của Lịch Việt. Khi sử dụng tính năng
            Quyên góp, các cá nhân, mạnh thường quân có mong muốn tham gia cộng
            đồng thiện nguyện thông qua việc sử dụng tính năng Quyên góp trên
            Website/Ứng dụng Lich Việt (gọi tắt <strong>“Người ủng hộ”</strong>)
            mặc nhiên đã chấp thuận và tuân thủ các điều khoản sử dụng, chính
            sách bảo mật được đăng tải trên Website/Ứng dụng Lịch Việt bao gồm
            nhưng không giới hạn bởi Điều khoản sử dụng nêu ở đây. Nếu Người ủng
            hộ không đồng ý với bất kỳ điều khoản nào được nêu ra trong đây, xin
            DỪNG VIỆC SỬ DỤNG tính năng này.
          </p>
        </div>
        <div>
          <p className="font-bold">2. Miễn trừ trách nhiệm </p>
          <ol>
            <li>
              - Tính năng Quyên góp (thể hiện trên Website/ứng dụng Lịch Việt)
              là một nền tảng công nghệ cung cấp cho người dùng các chiến dịch,
              hoạt động thiện nguyện để Người ủng hộ tự đánh giá, lựa chọn tham
              gia, ủng hộ theo nhu cầu và mong muốn thiện nguyện của mình. Người
              ủng hộ cần đánh giá, cân nhắc trước khi quyết định và hoàn toàn tự
              nguyện khi tham gia ủng hộ các chiến dịch, mục tiêu kêu gọi.
            </li>
            <li>
              - Lịch Việt hoàn toàn không thu lợi nhuận từ việc gây quỹ và cũng
              không thu/giữ bất kỳ khoản phí và khoản tiền nào của Người ủng hộ.
              100% số tiền của người dùng được chuyển thẳng tới tài khoản ngân
              hàng của các Tổ chức từ thiện (gọi tắt là{" "}
              <strong>“Tổ chức”</strong>), ngoại trừ các khoản phí theo quy định
              của Ngân hàng và của Nhà nước. Trong trường hợp có bất kỳ khiếu
              nại nào về các khoản quyên góp, Người ủng hộ xin vui lòng liên hệ
              trực tiếp tới các Tổ chức thông qua địa chỉ email được Lịch Việt
              công bố trong phần mô tả thông tin của từng Tổ chức tương ứng.
            </li>
            <li>
              - Trong mọi trường hợp, Lịch Việt sẽ không chịu trách nhiệm cho
              bất kỳ tổn thất hoặc thiệt hại nào, bao gồm nhưng không giới hạn ở
              trực tiếp hoặc gián tiếp hoặc do hậu quả của tổn thất; hoặc bất kỳ
              tổn thất nào do hoạt động thiện nguyện trên Website/Ứng dụng Lịch
              Việt gây ra.
            </li>
            <li>
              - Trong mọi nỗ lực, Lịch Việt hướng đến việc cung cấp thông tin rõ
              ràng, minh bạch để xây dựng cộng đồng thiện nguyện văn minh. Tuy
              nhiên, Lịch Việt không chịu trách nhiệm liên quan đến việc thực
              hiện các chiến dịch của Tổ chức, tính chính xác của các thông tin,
              hình ảnh về các nhân vật và sự kiện liên quan mà Tổ chức sử dụng
              cho các hoạt động truyền thông của mình. Lịch Việt không phải chịu
              bất cứ trách nhiệm nào hoặc không đưa ra bất kỳ cam kết nào về
              tính chính xác hoặc mức độ hiệu quả về các chiến dịch gây quỹ được
              tổ chức trong phạm vi tính năng Quyên góp.Nếu có bất kỳ thắc mắc
              nào liên quan đến vấn đề này, Người ủng hộ xin vui lòng liên hệ
              trực tiếp tới các Tổ chức thông qua địa chỉ email được Lịch Việt
              công bố trong phần mô tả thông tin của từng Tổ chức tương ứng.
            </li>
            <li>
              - Lịch Việt hoàn toàn không chịu trách nhiệm liên quan đến các vấn
              đề chuyển khoản quyên góp của Người ủng hộ. Trong trường hợp phát
              sinh lỗi hoặc bất kỳ vấn đề gì liên quan đến việc chuyển khoản,
              Người ủng hộ phải liên hệ ngân hàng mà Người ủng hộ sử dụng để
              được giải quyết .
            </li>
          </ol>
        </div>
        <div>
          <p className="font-bold">3. Duy trì dịch vụ</p>
          <ol>
            <li>
              - Để cung cấp cho người dùng Ứng Dụng những thông tin hữu ích
              khác, tính năng Quyên góp có thể chứa các đường dẫn liên kết đến
              các website và ứng dụng khác không thuộc quyền kiểm soát của Lịch
              Việt. Việc bao gồm bất kỳ liên kết nào không mang ngụ ý khuyến
              nghị hoặc xác nhận quan điểm, sản phẩm hoặc dịch vụ được thể hiện
              trong đó. Lịch Việt không cung cấp thẩm quyền và áp dụng chính
              sách cho các đơn vị quản lý các website và ứng dụng có đường dẫn
              liên kết. Các website và ứng dụng đó có thể có các điều khoản sử
              dụng khác nhau.
            </li>
            <li>
              - Lịch Việt nỗ lực để giữ cho tính năng Quyên góp hoạt động tốt.
              Tuy nhiên, Lịch Việt không chịu trách nhiệm và sẽ không chịu trách
              nhiệm về việc tính năng Quyên góp tạm thời thời không truy cập
              được vì bất kỳ lý do gì và Lịch Việt có quyền tạm thời hoặc vĩnh
              viễn ngưng tính năng Quyên góp vào bất cứ lúc nào và không cần
              thông báo trước.
            </li>
            <li>
              - Lịch Việt chịu trách nhiệm quản lý nội dung của tính năng Quyên
              góp, bao gồm mọi chỉnh sửa, diễn giải hoặc cập nhật nội dung theo
              quyết định riêng của mình.
            </li>
          </ol>
        </div>
        <div>
          <p className="font-bold">4. Bản quyền</p>
          <p>
            Tất cả nội dung, hình ảnh, thiết kế, tập tin và thông tin trong Tính
            năng Quyên góp đều thuộc bản quyền của Lịch Việt và không được sao
            chép, sửa đổi hoặc sử dụng dưới bất kỳ hình thức nào nếu không có sự
            cho phép bằng văn bản của Lịch Việt (ngoại trừ thông tin, hình ảnh
            do Tổ chức cung cấp hoặc thuộc sở hữu của Tổ chức hoặc bên thứ 3
            dưới dạng đồ họa và/hoặc logo)
          </p>
        </div>
        <div>
          <p className="font-bold">5. Thông tin khác</p>
          <p>
            Trong trường hợp Người dùng muốn nhận chứng từ khấu trừ thuế, xin
            vui lòng gửi email đến Tổ chức từ thiện với các thông tin sau:
          </p>
          <ol>
            <li>- Họ tên</li>
            <li>
              - Phiếu chuyển khoản ngân hàng hoặc hình ảnh giao dịch thành công
            </li>
            <li>- Số Căn cước công dân/Chứng minh thư</li>
            <li>- Mã số thuế</li>
            <li>- Số điện thoại</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Terms;
