import BookingForm from "@/features/form/BookingForm";
import { Suspense } from "react";

export default function BookingFormPage() {
  return(
  <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
    )
}