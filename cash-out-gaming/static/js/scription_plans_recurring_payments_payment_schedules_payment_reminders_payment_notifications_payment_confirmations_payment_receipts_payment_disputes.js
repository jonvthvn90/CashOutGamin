// Get the form elements
const form = document.getElementById('paypal-match-form');
const paymentMethodSelect = document.getElementById('payment-method');
const currencySelect = document.getElementById('currency');
const languageSelect = document.getElementById('language');
const paymentPlanSelect = document.getElementById('payment-plan');
const subscriptionPlanSelect = document.getElementById('subscription-plan');
const recurringPaymentSelect = document.getElementById('recurring-payment');
const paymentScheduleSelect = document.getElementById('payment-schedule');
const paymentReminderSelect = document.getElementById('payment-reminder');
const paymentNotificationSelect = document.getElementById('payment-notification');
const paymentConfirmationSelect = document.getElementById('payment-confirmation');
const paymentReceiptSelect = document.getElementById('payment-receipt');
const paymentDisputeSelect = document.getElementById('payment-dispute');

// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the selected values
  const paymentMethod = paymentMethodSelect.value;
  const currency = currencySelect.value;
  const language = languageSelect.value;
  const paymentPlan = paymentPlanSelect.value;
  const subscriptionPlan = subscriptionPlanSelect.value;
  const recurringPayment = recurringPaymentSelect.value;
  const paymentSchedule = paymentScheduleSelect.value;
  const paymentReminder = paymentReminderSelect.value;
  const paymentNotification = paymentNotificationSelect.value;
  const paymentConfirmation = paymentConfirmationSelect.value;
  const paymentReceipt = paymentReceiptSelect.value;
  const paymentDispute = paymentDisputeSelect.value;
  // Make API call to the PayPal match payment processor
  fetch('/paypal-match-payment-processor-api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentMethod,
      currency,
      language,
      paymentPlan,
      subscriptionPlan,
      recurringPayment,
      paymentSchedule,
      paymentReminder,
      paymentNotification,
      paymentConfirmation,
      paymentReceipt,
      paymentDispute,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle the response data
    })
    .catch((error) => {
      console.error(error);
      // Handle the error
    });
});