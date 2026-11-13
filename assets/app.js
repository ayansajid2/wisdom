
const cats=[["Politics","🏛️","#ede9fe"],["Sport","⚽","#fff1e6"],["Technology","💻","#e6f4ff"],["Economy","📈","#fff8e1"],["Education","🎓","#e8f0ff"],["Health","🩺","#fde8ef"],["Lifestyle","✨","#fff1e6"],["Culture","🎭","#f3e8ff"],["Science","🔬","#e0f7f4"],["Other","📝","#eef0f5"]];
const allArticles=()=>[...(window.WISDOM_ARTICLES||[]),...JSON.parse(localStorage.getItem("wisdom_custom_articles")||"[]")];
function card(a){return `<a class="card" href="article.html?id=${encodeURIComponent(a.id)}"><div class="thumb" style="background:${(cats.find(c=>c[0]===a.category)||cats[9])[2]}"><span class="pill">${a.category.toUpperCase()}</span>${a.icon||"📝"}</div><div class="cb"><h3>${escapeHtml(a.title)}</h3><div class="by">By ${escapeHtml(a.author||"Community")} · ${a.date||"Today"} <span class="badge">Community</span></div><p>${escapeHtml(a.summary||"")}</p><div class="foot"><b>Free</b><span class="rd">Read Article →</span></div></div></a>`}
function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
if(document.getElementById("grid")){
 const grid=document.getElementById("grid"),catbox=document.getElementById("catbox");
 catbox.innerHTML=cats.map(c=>`<button class="cat" data-cat="${c[0]}" style="background:${c[2]}"><i>${c[1]}</i>${c[0]}</button>`).join("");
 function render(filter=""){let arr=allArticles();if(filter)arr=arr.filter(a=>a.category===filter);grid.innerHTML=arr.map(card).join("");document.getElementById("total").textContent=allArticles().length}
 render();catbox.addEventListener("click",e=>{let b=e.target.closest("[data-cat]");if(b){render(b.dataset.cat);document.getElementById("articles").scrollIntoView({behavior:"smooth"})}});document.getElementById("all").onclick=()=>render();
}
