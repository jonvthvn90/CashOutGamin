// Global Variables

let games = [];
let reviews = [];
let paymentMethods = [];
let paymentTransactions = [];
let cashOutRequests = [];
let cashOutTransactions = [];

// DOM Elements

const gameList = document.getElementById('game-list');
const reviewList = document.getElementById('review-list');
const paymentMethodList = document.getElementById('payment-method-list');
const paymentTransactionList = document.getElementById('payment-transaction-list');
const cashOutRequestList = document.getElementById('cash-out-request-list');
const cashOutTransactionList = document.getElementById('cash-out-transaction-list');

// Functions

function getGames() {
  fetch('/api/games')
    .then(response => response.json())
    .then(data => {
      games = data;
      renderGameList();
    });
}

function getReviews() {
  fetch('/api/reviews')
    .then(response => response.json())
    .then(data => {
      reviews = data;
      renderReviewList();
    });
}

function getPaymentMethods() {
  fetch('/api/payment-methods')
    .then(response => response.json())
    .then(data => {
      paymentMethods = data;
      renderPaymentMethodList();
    });
}

function getPaymentTransactions() {
  fetch('/api/payment-transactions')
    .then(response => response.json())
    .then(data => {
      paymentTransactions = data;
      renderPaymentTransactionList();
    });
}

function getCashOutRequests() {
  fetch('/api/cash-out-requests')
    .then(response => response.json())
    .then(data => {
      cashOutRequests = data;
      renderCashOutRequestList();
    });
}

function getCashOutTransactions() {
  fetch('/api/cash-out-transactions')
    .then(response => response.json())
    .then(data => {
      cashOutTransactions = data;
      renderCashOutTransactionList();
    });
}

function renderGameList() {
  const gameListHtml = games.map(game => `
    <li>
      <h2>${game.title}</h2>
      <p>${game.description}</p>
    </li>
  `).join('');
  gameList.innerHTML = gameListHtml;
}

function renderReviewList() {
  const reviewListHtml = reviews.map(review => `
    <li>
      <h2>${review.game.title}</h2>
      <p>${review.review}</p>
    </li>
  `).join('');
  reviewList.innerHTML = reviewListHtml;
}

function renderPaymentMethodList() {
  const paymentMethodListHtml = paymentMethods.map(paymentMethod => `
    <li>
      <h2>${paymentMethod.name}</h2>
      <p>${paymentMethod.description}</p>
    </li>
  `).join('');
  paymentMethodList.innerHTML = paymentMethodListHtml;
}

function renderPaymentTransactionList() {
  const paymentTransactionListHtml = paymentTransactions.map(paymentTransaction => `
    <li>
      <h2>${paymentTransaction.paymentMethod.name}</h2>
      <p>${paymentTransaction.amount}</p>
    </li>
  `).join('');
  paymentTransactionList.innerHTML = paymentTransactionListHtml;
}

function renderCashOutRequestList() {
  const cashOutRequestListHtml = cashOutRequests.map(cashOutRequest => `
    <li>
      <h2>${cashOutRequest.amount}</h2>
      <p>${cashOutRequest.status}</p>
    </li>
  `).join('');
  cashOutRequestList.innerHTML = cashOutRequestListHtml;
}

function renderCashOutTransactionList() {
  const cashOutTransactionListHtml = cashOutTransactions.map(cashOutTransaction => `
    <li>
      <h2>${cashOutTransaction.cashOutRequest.amount}</h2>
      <p>${cashOutTransaction.amount}</p>
    </li>
  `).join('');
  cashOutTransactionList.innerHTML = cashOutTransactionListHtml;
}

// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
  getGames();
  getReviews();
  getPaymentMethods();
  getPaymentTransactions();
  getCashOutRequests();
  getCashOutTransactions();
});