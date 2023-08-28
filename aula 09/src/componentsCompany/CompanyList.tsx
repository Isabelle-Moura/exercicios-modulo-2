import { CompanyListWrapper } from "../styles/companyStyle";
import CompanyItem from "./CompanyItem";

interface Props {
  companies: Company[];
}

const CompanyList = ({ companies }: Props) => {
  return (
    <CompanyListWrapper>
      {companies.map((company, index) => (
        <CompanyItem key={index} company={company} />
      ))}
    </CompanyListWrapper>
  );
};

export default CompanyList;
