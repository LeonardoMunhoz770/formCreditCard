import {
  Container,
  ContainerCard,
  DataCard,
  ValidCVV,
  Card,
  LabelCard,
  InputNumberCard,
  InputNameCard,
  InputValidCard,
  InputCVV,
  ContainerImageCard,
  ImageCard,
  SecurityData,
  IconSecurity,
  LabelSecurity,
  ButtonAdd,
  ContentCard,
  HeaderCard,
  BrandCard,
  IconContactless,
  NumberCard,
  FooterCard,
  NameCard,
  ValidateCard,
  CardBackground,
  BackgroundCardFocus,
  LineCode,
  ContainerCVV,
  LineCVV,
  CodeCVV,
} from "./style";

import card from "../../assets/card.png";
import backgroundCard from "../../assets/backgroundCard.png";
import security from "../../assets/security.png";
import contactless from "../../assets/contactless.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import maestro from "../../assets/maestro.png";
import amex from "../../assets/amex.png";
import dinersClub from "../../assets/dinersClub.png";
import discover from "../../assets/discover.png";
import code from "../../assets/codeCard.png";
import cvv from "../../assets/cvv.png";

import { useState } from "react";

const Home = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [brandCard, setBrandCard] = useState("");
  const [isCVVFocused, setIsCVVFocused] = useState(false);

  const handleCVVFocus = () => {
    setIsCVVFocused(true);
  };

  const handleCVVBlur = () => {
    setIsCVVFocused(false);
  };

  const handleValues = (event) => {
    event.preventDefault();
    setCardNumber("");
    setCardName("");
    setExpiration("");
    setCardCVV("");
  };

  const changeCardNumber = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, "");
    let maskedValue = "";
    if (formattedValue.length <= 4) {
      maskedValue = formattedValue;
    } else if (formattedValue.length <= 8) {
      maskedValue = formattedValue.replace(/(\d{4})/, "$1 ");
    } else if (formattedValue.length <= 12) {
      maskedValue = formattedValue.replace(/(\d{4})(\d{4})/, "$1 $2 ");
    } else {
      maskedValue = formattedValue.replace(
        /(\d{4})(\d{4})(\d{4})/,
        "$1 $2 $3 "
      );
    }

    setCardNumber(maskedValue);
    validateCreditCard(maskedValue);
  };
  const changeExpiration = (value) => {
    const formattedValue = value.replace(/\D/g, "").slice(0, 4);
    if (formattedValue.length > 2) {
      const month = formattedValue.slice(0, 2);
      const year = formattedValue.slice(2);
      return `${month}/${year}`;
    } else {
      return formattedValue;
    }
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = changeExpiration(value);
    setExpiration(formattedValue);
  };

  const validateCreditCard = (cardNumber) => {
    const cleanedNumber = cardNumber.replace(/\D/g, "");

    // Verificar se o número é válido usando o algoritmo de Luhn
    let isValid = false;
    if (/^\d+$/.test(cleanedNumber)) {
      let sum = 0;
      let shouldDouble = false;
      for (let i = cleanedNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanedNumber.charAt(i), 10);
        if (shouldDouble) {
          if ((digit *= 2) > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
      }
      isValid = sum % 10 === 0;
    }
    // Identificar a bandeira do cartão
    let brand = "Desconhecido";
    const firstDigit = cleanedNumber.charAt(0);
    const firstTwoDigits = cleanedNumber.slice(0, 2);

    if (/^4\d*$/.test(cleanedNumber)) {
      brand = "Visa";
      setBrandCard(visa);
    } else if (
      /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[0-1]|2720)\d*$/.test(cleanedNumber)
    ) {
      brand = "Mastercard";
      setBrandCard(mastercard);
    } else if (/^3[47]\d*$/.test(cleanedNumber)) {
      brand = "American Express";
      setBrandCard(amex);
    } else if (/^(6011|65|64[4-9]|622)\d*$/.test(cleanedNumber)) {
      brand = "Discover";
      setBrandCard(discover);
    } else if (/^3(0[0-5]|[68])\d*$/.test(cleanedNumber)) {
      brand = "Diners Club";
      setBrandCard(dinersClub);
    } else if (/^(5018|5020|5038|6304|6759|676[1-3])\d*$/.test(cleanedNumber)) {
      brand = "Maestro";
      setBrandCard(maestro);
    }

    return {
      isValid,
      brand,
    };
  };

  return (
    <Container>
      <ContentCard>
        <ContainerCard>
          <DataCard>
            <Card>
              <LabelCard>Número do Cartão</LabelCard>
              <InputNumberCard
                placeholder="**** **** **** ****"
                maxLength={19}
                type="text"
                value={cardNumber}
                onChange={changeCardNumber}
              />
            </Card>
            <Card>
              <LabelCard>Nome do titular</LabelCard>
              <InputNameCard
                placeholder="Nome como está no cartão"
                value={cardName}
                onChange={(event) => setCardName(event.target.value)}
              />
            </Card>

            <ValidCVV>
              <Card>
                <LabelCard>Validade</LabelCard>
                <InputValidCard
                  placeholder="mm/aa"
                  maxLength={5}
                  value={expiration}
                  onChange={handleInputChange}
                />
              </Card>
              <Card>
                <LabelCard>CVV</LabelCard>
                <InputCVV
                  placeholder="***"
                  maxLength={3}
                  value={cardCVV}
                  onChange={(event) => setCardCVV(event.target.value)}
                  onFocus={handleCVVFocus}
                  onBlur={handleCVVBlur}
                />
              </Card>
            </ValidCVV>
          </DataCard>
          <ContainerImageCard>
            {isCVVFocused ? (
              <CardBackground>
                <BackgroundCardFocus src={backgroundCard} />
                <LineCode src={code} />
                <ContainerCVV>
                  <LineCVV src={cvv} />
                  <CodeCVV>{cardCVV}</CodeCVV>
                </ContainerCVV>
              </CardBackground>
            ) : (
              <>
                <HeaderCard>
                  <BrandCard src={brandCard} />
                  <IconContactless src={contactless} />
                  <NumberCard>{cardNumber}</NumberCard>
                  <FooterCard>
                    <NameCard>{cardName}</NameCard>
                    <ValidateCard>{expiration}</ValidateCard>
                  </FooterCard>
                </HeaderCard>
                <ImageCard src={card} />
              </>
            )}

            <SecurityData>
              <IconSecurity src={security} />
              <LabelSecurity>Seus dados estão seguros</LabelSecurity>
            </SecurityData>
          </ContainerImageCard>
        </ContainerCard>
        <ButtonAdd>Adicionar Cartão</ButtonAdd>
      </ContentCard>
    </Container>
  );
};

export default Home;
