
import { test,request, expect } from '@playwright/test';
import { votePaartha } from '../utils/apiVotePaartha';

test('Vote for Paartha Saarati using gmail - Bharath', async ({ page }) => {
    const cookieValue = `wordpress_sec_920422acd07a83c58dc44974de4ce159=google_bharathkumarl1%7C1755282283%7C4EAwp8nsUCV42rfSlyrEZRZyghCGLuyOf4EUMkb6gm1%7Cd38a3147b22ecaae148ef95c7e0b825c8611bcf47bb671c8355ae2b87ee293b4; _ga=GA1.1.1872416951.1754069303; _gcl_au=1.1.1295161123.1754069303; _fbp=fb.1.1754069303900.11214796350570673; _cc_id=e51e68155ee857fa51461e628f2547f2; pum-9794=true; wordpress_test_cookie=WP%20Cookie%20check; _lscache_vary=3367d4bbc7b3539b9faab173f720a26d; wordpress_logged_in_920422acd07a83c58dc44974de4ce159=google_bharathkumarl1%7C1755282283%7C4EAwp8nsUCV42rfSlyrEZRZyghCGLuyOf4EUMkb6gm1%7C8cf57c9794c851a1ce9cba8aae335f58bfc6d25e0d6e1cb84337a5f20bc2ef02; panoramaId_expiry=1754454238710; cto_bundle=VqtGIV9LVkVsUmNvYlIlMkJXeTUyJTJCeFd5N3Q1cTk2OGtSQkJlZTEzQ1hpWjZkWkhJcWRpaERMV0hZNkUlMkJNQ3E0cGRqSGkzJTJCMzM2WGFWU1VZaEVtTHo3QXFwZjI3d01pY25HUXF1Z1M0MXdFSmxaakhZQ0xYc3RqMXpzSTNObERGczZiMjlZ; __gads=ID=7dc0db29bb24e0a8:T=1754069305:RT=1754369674:S=ALNI_MZC1iJoVzNGfRwe_1KFwJDc99L9aQ; __gpi=UID=00001173ed5f5643:T=1754069305:RT=1754369674:S=ALNI_MYJ0hooE9G1kmUc3-pbQgWyQLX6lA; __eoi=ID=c2af468493a41256:T=1754069305:RT=1754369674:S=AA-Afja55FEEfSUdwTOtZODZAhRX; _ga_LDMCKTGX8S=GS2.1.s1754367836^$o15^$g1^$t1754369686^$j46^$l0^$h331985649; FCNEC=%5B%5B%22AKsRol9H4MOmerjVWZDR2Lvz5J2KdoyjpxgcdU_y-SBTjY3eRDARXdi7MvIBcOkOc32heoEJx4MXBv6i-JQX6-HF50Hk5wrqGw6kqnTTHc6gnuGoXeiHQ98wU_gBN_p3-Kh2kpRZnG45tqQrpbgFaGjNPBrSMWGm2A%3D%3D%22%5D%5D`;
    const nonceId = '38427289cf';
    const apiContext = await request.newContext();
    await votePaartha(cookieValue, nonceId, 'Bharath');   //Vote for Paartha Saarati through API
});
