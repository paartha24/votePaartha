import { test,request, expect } from '@playwright/test';
import { votePaartha } from '../utils/apiVotePaartha';

test('Vote for Paartha Saarati using gmail - Kushal', async ({ page }) => {
    const cookieValue = `wordpress_sec_920422acd07a83c58dc44974de4ce159=google_kushalr%7C1755458513%7ChvKdvcsaAmj3cuXf7qIoaBzjHogcry2s6YNTSJv4EkE%7Cf55bbb543211eac71dded6bdb348867708e2fc827f14271f529d0359c12c055e; wordpress_test_cookie=WP%20Cookie%20check; pum-9794=true; _lscache_vary=3367d4bbc7b3539b9faab173f720a26d; wordpress_logged_in_920422acd07a83c58dc44974de4ce159=google_kushalr%7C1755458513%7ChvKdvcsaAmj3cuXf7qIoaBzjHogcry2s6YNTSJv4EkE%7C3bb117a3d9a2a13f1c20b6c1a87455ce954360272ced94803407dccc19aec1be`;
    const nonceId = '0425a032bd';
    const apiContext = await request.newContext();
    await votePaartha(cookieValue, nonceId, 'Kushal');   //Vote for Paartha Saarati through API
});