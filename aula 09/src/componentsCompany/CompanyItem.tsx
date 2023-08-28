import { CompanyCard, CompanyName, CompanyInfo } from "../styles/companyStyle";

interface Props {
  company: Company;
}

const CompanyItem = ({ company }: Props) => {
  return (
    <CompanyCard>
      <CompanyName>{company.name}</CompanyName>
      {company.email && <CompanyInfo>Email: {company.email}</CompanyInfo>}
      {company.phone && <CompanyInfo>Phone: {company.phone}</CompanyInfo>}
      {company.linkedin && (
        <CompanyInfo>LinkedIn: {company.linkedin}</CompanyInfo>
      )}
      {company.address && <CompanyInfo>Address: {company.address}</CompanyInfo>}
    </CompanyCard>
  );
};

export default CompanyItem;
