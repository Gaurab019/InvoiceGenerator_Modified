export default function ClientDetails({
  patientname,
  sex,
  dob,
  phone,
  doctorname,
}) {
  return (
    <>
      <section className="mt-5 mb-5 flex flex-col justify-evenly items-start gap-5 [word-spacing:3px]">
        <div className="flex justify-evenly items-center gap-10">
          <p className="text-base  mb-1 flex-1">
            Patient Name:{" "}
            <span className=" text-lg ml-5 font-semibold">{patientname}</span>
          </p>
          <p className="text-base  mb-1">
            Sex: <span className=" text-lg ml-5 font-semibold">{sex}</span>
          </p>
        </div>
        <div className="flex justify-evenly items-center gap-10">
          <p className="text-base  mb-1">
            DOB: <span className=" text-lg ml-5 font-semibold">{dob}</span>
          </p>
          <p className="text-base  mb-1 w">
            Phone Number:{" "}
            <span className=" text-lg ml-5 font-semibold">{phone}</span>
          </p>
        </div>
        <div className="flex justify-evenly items-center gap-10">
          <p className="text-base  mb-1">
            Consulting Doctor:{" "}
            <span className=" text-lg ml-5 font-semibold uppercase">
              {doctorname}
            </span>
          </p>
          {/* <p className="text-base  mb-1">
            Address: <span>{address}</span>
          </p> */}
        </div>
      </section>
    </>
  );
}
