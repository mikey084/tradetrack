var transactions = [
  {id: 1, user_id: 2, stock_id: 4, closed_flag: true, share_price: 31.03, num_shares: -20, action: 'SELL', direction: 'SHORT', commission: 0.99, fees: 7.52, created_at: new Date('2014-02-06 12:26:16 UTC'), updated_at: new Date('2014-02-06 12:26:16 UTC')},
  {id: 4, user_id: 2, stock_id: 13, closed_flag: true, share_price: 0.223, num_shares: 2500, action: 'BUY', direction: 'LONG', commission: 9.75, fees: 7.5, created_at: new Date('2014-02-06 12:26:16 UTC'), updated_at: new Date('2014-02-06 12:26:16 UTC')},
  {id: 5, user_id: 2, stock_id: 16, closed_flag: true, share_price: 24.64, num_shares: -25, action: 'SELL', direction: 'SHORT', commission: 0.99, fees: 7.52, created_at: new Date('2014-02-06 12:26:16 UTC'), updated_at: new Date('2014-02-06 12:26:16 UTC')},
  {id: 6, user_id: 2, stock_id: 21, closed_flag: true, share_price: 0.2189, num_shares: 800, action: 'BUY', direction: 'LONG', commission: 3.12, fees: 7.5, created_at: new Date('2014-02-06 12:26:16 UTC'), updated_at: new Date('2014-02-06 12:26:16 UTC')},
  {id: 7, user_id: 2, stock_id: 29, closed_flag: true, share_price: 59.18, num_shares: 100, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 7.5, created_at: new Date('2014-02-06 12:26:16 UTC'), updated_at: new Date('2014-02-06 12:26:16 UTC')},
  {id: 8, user_id: 2, stock_id: 13, closed_flag: true, share_price: 0.2095, num_shares: -2500, action: 'SELL', direction: 'LONG', commission: 9.75, fees: 7.51, created_at: new Date('2014-02-06 13:26:16 UTC'), updated_at: new Date('2014-02-06 13:26:16 UTC')},
  {id: 9, user_id: 2, stock_id: 21, closed_flag: true, share_price: 0.2993, num_shares: -1600, action: 'SELL', direction: 'LONG', commission: 6.24, fees: 7.51, created_at: new Date('2014-02-06 13:26:16 UTC'), updated_at: new Date('2014-02-06 13:26:16 UTC')},
  {id: 10, user_id: 2, stock_id: 4, closed_flag: true, share_price: 32.43, num_shares: 20, action: 'BUY', direction: 'SHORT', commission: 0.99, fees: 7.5, created_at: new Date('2014-02-07 12:26:16 UTC'), updated_at: new Date('2014-02-07 12:26:16 UTC')},
  {id: 11, user_id: 2, stock_id: 29, closed_flag: true, share_price: 61.56, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 7.56, created_at: new Date('2014-02-07 12:26:16 UTC'), updated_at: new Date('2014-02-07 12:26:16 UTC')},
  {id: 12, user_id: 2, stock_id: 7, closed_flag: true, share_price: 2.05, num_shares: 300, action: 'BUY', direction: 'LONG', commission: 1.17, fees: 7.5, created_at: new Date('2014-02-10 12:26:16 UTC'), updated_at: new Date('2014-02-10 12:26:16 UTC')},
  {id: 13, user_id: 2, stock_id: 5, closed_flag: true, share_price: 5.07, num_shares: 100, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 7.5, created_at: new Date('2014-02-10 12:26:16 UTC'), updated_at: new Date('2014-02-10 12:26:16 UTC')},
  {id: 15, user_id: 2, stock_id: 16, closed_flag: true, share_price: 26.11, num_shares: 25, action: 'BUY', direction: 'SHORT', commission: 0.99, fees: 7.5, created_at: new Date('2014-02-10 12:26:16 UTC'), updated_at: new Date('2014-02-10 12:26:16 UTC')},
  {id: 16, user_id: 2, stock_id: 21, closed_flag: true, share_price: 0.16, num_shares: 800, action: 'BUY', direction: 'LONG', commission: 3.12, fees: 7.5, created_at: new Date('2014-02-10 12:26:16 UTC'), updated_at: new Date('2014-02-10 12:26:16 UTC')},
  {id: 17, user_id: 2, stock_id: 29, closed_flag: true, share_price: 62.77, num_shares: -35, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 7.54, created_at: new Date('2014-02-10 12:26:16 UTC'), updated_at: new Date('2014-02-10 12:26:16 UTC')},
  {id: 18, user_id: 2, stock_id: 5, closed_flag: true, share_price: 4.94, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 7.51, created_at: new Date('2014-02-10 13:26:16 UTC'), updated_at: new Date('2014-02-10 13:26:16 UTC')},
  {id: 19, user_id: 2, stock_id: 25, closed_flag: true, share_price: 0.284, num_shares: 1500, action: 'BUY', direction: 'LONG', commission: 5.85, fees: 3.5, created_at: new Date('2014-02-12 12:26:16 UTC'), updated_at: new Date('2014-02-12 12:26:16 UTC')},
  {id: 20, user_id: 2, stock_id: 27, closed_flag: true, share_price: 9.13, num_shares: 70, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 3.5, created_at: new Date('2014-02-12 12:26:16 UTC'), updated_at: new Date('2014-02-12 12:26:16 UTC')},
  {id: 21, user_id: 2, stock_id: 29, closed_flag: true, share_price: 64.06, num_shares: -15, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 3.52, created_at: new Date('2014-02-12 12:26:16 UTC'), updated_at: new Date('2014-02-12 12:26:16 UTC')},
  {id: 22, user_id: 2, stock_id: 9, closed_flag: true, share_price: 0.1805, num_shares: 2500, action: 'BUY', direction: 'LONG', commission: 9.75, fees: 0, created_at: new Date('2014-02-13 12:26:16 UTC'), updated_at: new Date('2014-02-13 12:26:16 UTC')},
  {id: 23, user_id: 2, stock_id: 27, closed_flag: true, share_price: 8.95, num_shares: -70, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.02, created_at: new Date('2014-02-13 12:26:16 UTC'), updated_at: new Date('2014-02-13 12:26:16 UTC')},
  {id: 24, user_id: 2, stock_id: 28, closed_flag: true, share_price: 4.909, num_shares: 150, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-13 12:26:16 UTC'), updated_at: new Date('2014-02-13 12:26:16 UTC')},
  {id: 25, user_id: 2, stock_id: 17, closed_flag: true, share_price: 0.8847, num_shares: 600, action: 'BUY', direction: 'LONG', commission: 2.34, fees: 0, created_at: new Date('2014-02-14 12:26:16 UTC'), updated_at: new Date('2014-02-14 12:26:16 UTC')},
  {id: 26, user_id: 2, stock_id: 9, closed_flag: true, share_price: 0.1825, num_shares: -2500, action: 'SELL', direction: 'LONG', commission: 9.75, fees: 0, created_at: new Date('2014-02-14 12:26:16 UTC'), updated_at: new Date('2014-02-14 12:26:16 UTC')},
  {id: 27, user_id: 2, stock_id: 25, closed_flag: true, share_price: 0.286, num_shares: -1500, action: 'SELL', direction: 'LONG', commission: 5.85, fees: -0.04, created_at: new Date('2014-02-14 12:26:16 UTC'), updated_at: new Date('2014-02-14 12:26:16 UTC')},
  {id: 28, user_id: 2, stock_id: 17, closed_flag: true, share_price: 1.14, num_shares: -200, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-18 12:26:16 UTC'), updated_at: new Date('2014-02-18 12:26:16 UTC')},
  {id: 30, user_id: 2, stock_id: 1, closed_flag: true, share_price: 5.08, num_shares: 100, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-19 12:26:16 UTC'), updated_at: new Date('2014-02-19 12:26:16 UTC')},
  {id: 31, user_id: 2, stock_id: 23, closed_flag: true, share_price: 2.962, num_shares: 250, action: 'BUY', direction: 'LONG', commission: 1.98, fees: 0, created_at: new Date('2014-02-19 12:26:16 UTC'), updated_at: new Date('2014-02-19 12:26:16 UTC')},
  {id: 32, user_id: 2, stock_id: 32, closed_flag: true, share_price: 1.84, num_shares: 300, action: 'BUY', direction: 'LONG', commission: 1.17, fees: 0, created_at: new Date('2014-02-19 12:26:16 UTC'), updated_at: new Date('2014-02-19 12:26:16 UTC')},
  {id: 33, user_id: 2, stock_id: 31, closed_flag: true, share_price: 2.96, num_shares: 100, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-19 12:26:16 UTC'), updated_at: new Date('2014-02-19 12:26:16 UTC')},
  {id: 34, user_id: 2, stock_id: 26, closed_flag: true, share_price: 1.23, num_shares: 450, action: 'BUY', direction: 'LONG', commission: 1.76, fees: 0, created_at: new Date('2014-02-20 12:26:16 UTC'), updated_at: new Date('2014-02-20 12:26:16 UTC')},
  {id: 35, user_id: 2, stock_id: 8, closed_flag: true, share_price: 2.09, num_shares: 300, action: 'BUY', direction: 'LONG', commission: 1.17, fees: 0, created_at: new Date('2014-02-21 12:26:16 UTC'), updated_at: new Date('2014-02-21 12:26:16 UTC')},
  {id: 36, user_id: 2, stock_id: 22, closed_flag: true, share_price: 5.45, num_shares: 100, action: 'BUY', direction: 'LONG', commission: 1.29, fees: 0, created_at: new Date('2014-02-21 12:26:16 UTC'), updated_at: new Date('2014-02-21 12:26:16 UTC')},
  {id: 37, user_id: 2, stock_id: 11, closed_flag: true, share_price: 2.16, num_shares: 200, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-21 12:26:16 UTC'), updated_at: new Date('2014-02-21 12:26:16 UTC')},
  {id: 38, user_id: 2, stock_id: 31, closed_flag: true, share_price: 2.87, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-21 12:26:16 UTC'), updated_at: new Date('2014-02-21 12:26:16 UTC')},
  {id: 39, user_id: 2, stock_id: 2, closed_flag: true, share_price: 3.49, num_shares: 200, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-24 12:26:16 UTC'), updated_at: new Date('2014-02-24 12:26:16 UTC')},
  {id: 40, user_id: 2, stock_id: 15, closed_flag: true, share_price: 3.59, num_shares: 200, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-24 12:26:16 UTC'), updated_at: new Date('2014-02-24 12:26:16 UTC')},
  {id: 41, user_id: 2, stock_id: 20, closed_flag: true, share_price: 59.91, num_shares: 10, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-24 12:26:16 UTC'), updated_at: new Date('2014-02-24 12:26:16 UTC')},
  {id: 42, user_id: 2, stock_id: 23, closed_flag: true, share_price: 3.67, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-24 12:26:16 UTC'), updated_at: new Date('2014-02-24 12:26:16 UTC')},
  {id: 43, user_id: 2, stock_id: 33, closed_flag: true, share_price: 1.49, num_shares: 500, action: 'BUY', direction: 'LONG', commission: 1.95, fees: 0, created_at: new Date('2014-02-24 12:26:16 UTC'), updated_at: new Date('2014-02-24 12:26:16 UTC')},
  {id: 45, user_id: 2, stock_id: 8, closed_flag: true, share_price: 1.69, num_shares: -300, action: 'SELL', direction: 'LONG', commission: 1.17, fees: 0.01, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 46, user_id: 2, stock_id: 18, closed_flag: true, share_price: 0.7779, num_shares: 250, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 47, user_id: 2, stock_id: 22, closed_flag: true, share_price: 5.97, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 48, user_id: 2, stock_id: 23, closed_flag: true, share_price: 3.8201, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 49, user_id: 2, stock_id: 26, closed_flag: true, share_price: 1.23, num_shares: -450, action: 'SELL', direction: 'LONG', commission: 1.76, fees: 0, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 50, user_id: 2, stock_id: 11, closed_flag: true, share_price: 2.63, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 51, user_id: 2, stock_id: 28, closed_flag: true, share_price: 5.0901, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 52, user_id: 2, stock_id: 32, closed_flag: true, share_price: 1.84, num_shares: -300, action: 'SELL', direction: 'LONG', commission: 1.17, fees: 0, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 53, user_id: 2, stock_id: 33, closed_flag: true, share_price: 1.7, num_shares: -300, action: 'SELL', direction: 'LONG', commission: 1.17, fees: 0.01, created_at: new Date('2014-02-25 12:26:16 UTC'), updated_at: new Date('2014-02-25 12:26:16 UTC')},
  {id: 54, user_id: 2, stock_id: 7, closed_flag: true, share_price: 2.05, num_shares: -300, action: 'SELL', direction: 'LONG', commission: 1.17, fees: 0.02, created_at: new Date('2014-02-26 12:26:16 UTC'), updated_at: new Date('2014-02-26 12:26:16 UTC')},
  {id: 55, user_id: 2, stock_id: 15, closed_flag: true, share_price: 4.16, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-26 12:26:16 UTC'), updated_at: new Date('2014-02-26 12:26:16 UTC')},
  {id: 56, user_id: 2, stock_id: 3, closed_flag: true, share_price: 2.08, num_shares: 300, action: 'BUY', direction: 'LONG', commission: 1.17, fees: 0, created_at: new Date('2014-02-27 12:26:16 UTC'), updated_at: new Date('2014-02-27 12:26:16 UTC')},
  {id: 57, user_id: 2, stock_id: 15, closed_flag: true, share_price: 4.99, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-27 12:26:16 UTC'), updated_at: new Date('2014-02-27 12:26:16 UTC')},
  {id: 58, user_id: 2, stock_id: 24, closed_flag: true, share_price: 9.89, num_shares: 60, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-27 12:26:16 UTC'), updated_at: new Date('2014-02-27 12:26:16 UTC')},
  {id: 59, user_id: 2, stock_id: 3, closed_flag: true, share_price: 1.98, num_shares: -300, action: 'SELL', direction: 'LONG', commission: 1.17, fees: 0.02, created_at: new Date('2014-02-28 12:26:16 UTC'), updated_at: new Date('2014-02-28 12:26:16 UTC')},
  {id: 60, user_id: 2, stock_id: 15, closed_flag: true, share_price: 4.78, num_shares: -25, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-28 12:26:16 UTC'), updated_at: new Date('2014-02-28 12:26:16 UTC')},
  {id: 61, user_id: 2, stock_id: 23, closed_flag: true, share_price: 3.28, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-28 12:26:16 UTC'), updated_at: new Date('2014-02-28 12:26:16 UTC')},
  {id: 62, user_id: 2, stock_id: 11, closed_flag: true, share_price: 2.5301, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-02-28 12:26:16 UTC'), updated_at: new Date('2014-02-28 12:26:16 UTC')},
  {id: 63, user_id: 2, stock_id: 33, closed_flag: true, share_price: 1.71, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-02-28 12:26:16 UTC'), updated_at: new Date('2014-02-28 12:26:16 UTC')},
  {id: 64, user_id: 2, stock_id: 2, closed_flag: true, share_price: 3.291, num_shares: -200, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.02, created_at: new Date('2014-03-05 12:26:16 UTC'), updated_at: new Date('2014-03-05 12:26:16 UTC')},
  {id: 65, user_id: 2, stock_id: 18, closed_flag: true, share_price: 0.8189, num_shares: 500, action: 'BUY', direction: 'LONG', commission: 1.95, fees: 0, created_at: new Date('2014-03-05 12:26:16 UTC'), updated_at: new Date('2014-03-05 12:26:16 UTC')},
  {id: 66, user_id: 2, stock_id: 14, closed_flag: true, share_price: 7.089, num_shares: 100, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-03-06 12:26:16 UTC'), updated_at: new Date('2014-03-06 12:26:16 UTC')},
  {id: 67, user_id: 2, stock_id: 19, closed_flag: true, share_price: 2.61, num_shares: -200, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-03-06 12:26:16 UTC'), updated_at: new Date('2014-03-06 12:26:16 UTC')},
  {id: 68, user_id: 2, stock_id: 30, closed_flag: true, share_price: 22.475, num_shares: 25, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-03-06 12:26:16 UTC'), updated_at: new Date('2014-03-06 12:26:16 UTC')},
  {id: 69, user_id: 2, stock_id: 19, closed_flag: true, share_price: 2.999, num_shares: 200, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-03-06 13:26:16 UTC'), updated_at: new Date('2014-03-06 13:26:16 UTC')},
  {id: 70, user_id: 2, stock_id: 14, closed_flag: true, share_price: 7.1, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.02, created_at: new Date('2014-03-11 12:26:16 UTC'), updated_at: new Date('2014-03-11 12:26:16 UTC')},
  {id: 71, user_id: 2, stock_id: 15, closed_flag: true, share_price: 3.95, num_shares: 100, action: 'BUY', direction: 'LONG', commission: 0.99, fees: 0, created_at: new Date('2014-03-11 12:26:16 UTC'), updated_at: new Date('2014-03-11 12:26:16 UTC')},
  {id: 72, user_id: 2, stock_id: 15, closed_flag: true, share_price: 3.952, num_shares: -125, action: 'SELL', direction: 'SHORT', commission: 1.98, fees: 0.01, created_at: new Date('2014-03-11 12:26:16 UTC'), updated_at: new Date('2014-03-11 12:26:16 UTC')},
  {id: 73, user_id: 2, stock_id: 18, closed_flag: true, share_price: 0.7451, num_shares: -750, action: 'SELL', direction: 'LONG', commission: 2.93, fees: 0, created_at: new Date('2014-03-11 12:26:16 UTC'), updated_at: new Date('2014-03-11 12:26:16 UTC')},
  {id: 74, user_id: 2, stock_id: 24, closed_flag: true, share_price: 9.41, num_shares: -60, action: 'SELL', direction: 'LONG', commission: 1.17, fees: 0.01, created_at: new Date('2014-03-11 12:26:16 UTC'), updated_at: new Date('2014-03-11 12:26:16 UTC')},
  {id: 75, user_id: 2, stock_id: 25, closed_flag: true, share_price: 0.336, num_shares: 2000, action: 'BUY', direction: 'LONG', commission: 7.8, fees: 0, created_at: new Date('2014-03-11 12:26:16 UTC'), updated_at: new Date('2014-03-11 12:26:16 UTC')},
  {id: 76, user_id: 2, stock_id: 28, closed_flag: true, share_price: 4.885, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-03-11 12:26:16 UTC'), updated_at: new Date('2014-03-11 12:26:16 UTC')},
  {id: 77, user_id: 2, stock_id: 33, closed_flag: true, share_price: 1.611, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-03-12 12:26:16 UTC'), updated_at: new Date('2014-03-12 12:26:16 UTC')},
  {id: 79, user_id: 2, stock_id: 17, closed_flag: true, share_price: 1.19, num_shares: -400, action: 'SELL', direction: 'LONG', commission: 1.56, fees: 0.02, created_at: new Date('2014-03-14 12:26:16 UTC'), updated_at: new Date('2014-03-14 12:26:16 UTC')},
  {id: 81, user_id: 2, stock_id: 1, closed_flag: true, share_price: 5.39, num_shares: -100, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.02, created_at: new Date('2014-03-14 12:26:16 UTC'), updated_at: new Date('2014-03-14 12:26:16 UTC')},
  {id: 82, user_id: 2, stock_id: 20, closed_flag: true, share_price: 79.2, num_shares: -10, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.02, created_at: new Date('2014-03-14 12:26:16 UTC'), updated_at: new Date('2014-03-14 12:26:16 UTC')},
  {id: 83, user_id: 2, stock_id: 22, closed_flag: true, share_price: 5.51, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-03-14 12:26:16 UTC'), updated_at: new Date('2014-03-14 12:26:16 UTC')},
  {id: 84, user_id: 2, stock_id: 23, closed_flag: true, share_price: 3.39, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-03-14 12:26:16 UTC'), updated_at: new Date('2014-03-14 12:26:16 UTC')},
  {id: 85, user_id: 2, stock_id: 11, closed_flag: true, share_price: 2.67, num_shares: -50, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.01, created_at: new Date('2014-03-14 12:26:16 UTC'), updated_at: new Date('2014-03-14 12:26:16 UTC')},
  {id: 86, user_id: 2, stock_id: 30, closed_flag: true, share_price: 22.59, num_shares: -25, action: 'SELL', direction: 'LONG', commission: 0.99, fees: 0.02, created_at: new Date('2014-03-14 12:26:16 UTC'), updated_at: new Date('2014-03-14 12:26:16 UTC')},
  {id: 87, user_id: 2, stock_id: 25, closed_flag: true, share_price: 0.33, num_shares: -2000, action: 'SELL', direction: 'LONG', commission: 7.8, fees: 0.02, created_at: new Date('2014-03-17 12:26:16 UTC'), updated_at: new Date('2014-03-17 12:26:16 UTC')},
  {id: 88, user_id: 1, stock_id: 42, closed_flag: false, share_price: 71.40, num_shares: 30, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 89, user_id: 1, stock_id: 43, closed_flag: false, share_price: 39.05, num_shares: 50, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 90, user_id: 1, stock_id: 44, closed_flag: false, share_price: 108.14, num_shares: 20, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 91, user_id: 1, stock_id: 45, closed_flag: false, share_price: 32.10, num_shares: 60, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 92, user_id: 1, stock_id: 46, closed_flag: false, share_price: 38.15, num_shares: 66, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 93, user_id: 1, stock_id: 47, closed_flag: false, share_price: 120.73, num_shares: 15, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 94, user_id: 1, stock_id: 48, closed_flag: false, share_price: 161.40, num_shares: 12, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 95, user_id: 1, stock_id: 49, closed_flag: false, share_price: 146.82, num_shares: 15, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 96, user_id: 1, stock_id: 50, closed_flag: false, share_price: 26.66, num_shares: 95, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')},
  {id: 97, user_id: 1, stock_id: 51, closed_flag: false, share_price: 32.38, num_shares: 70, action: 'BUY', direction: 'LONG', commission: 8.95, fees: 0, created_at: new Date('2016-11-16 12:26:16 UTC'), updated_at: new Date('2016-11-16 12:26:16 UTC')}
];

exports.seed = function(knex, Promise) {
	var seedPromises = [];

	for (var index in transactions) {
    	seedPromises.push(knex('transactions').insert(transactions[index]));
  }
    // Delete all, then run the updates
    return knex('transactions').del().then(function() {
        return Promise.all(seedPromises);
  	});
};
