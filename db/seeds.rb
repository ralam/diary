# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Today
today = Date.today

# Entries for user with ID 2
Entry.create!(
  content: %q(Today, I got out of bed, accidentally put pinapples in my coffee, and decided today just wasn't my day. So I went back to bed and slept in. 
  Not sure where those pinapples came from though -- thought I'd eaten all of them.),
  create_date: today - 2,
  user_id: 2
)

Entry.create!(
  content: %q(I decided to go for a bike ride today, so I went to go dig out my bike from storage. Both tires were flat and the chain was rusty, so I had
  to go shopping instead. Ended up spending the whole day trying to repair my bike.),
  create_date: today - 3,
  user_id: 2
)

Entry.create!(
  content: %q(Decided to go into work today. My boss asked where I'd been for the past two months -- he had a point. I told him about Alaska and the pinapples
  though and he forgot about it. Think I'm safe.),
  create_date: today - 4,
  user_id: 2  
)

Entry.create!(
  content: %q(Feeling better today. I went to the gym and bought groceries afterwards -- but no pinapples this tiime. Not making that mistake again.),
  create_date: today - 7,
  user_id: 2
)

Entry.create!(
  content: %q(Ate too many pineapples and got sick. There really should be a warning somewhere about that.),
  create_date: today - 8,
  user_id: 2
)

Entry.create!(
  content: %q(Got back from Alaska today. The pinapples look ok. Just to be careful, I'm going to eat them all as soon as possible.),
  create_date: today - 9,
  user_id: 2
)

Entry.create!(
  content: %q(Tomorrow, I'm going to Alaska, so I'm not going to be updating this for a few days. Probably should have thought about that earlier.
  I hope the pinapples are still ok when I get back.),
  create_date: today - 14,
  user_id: 2
)

Entry.create!(
  content: %q(Today, I went to the gym, then went grocery shopping. I bought a lot of pinapples.),
  create_date: today - 15,
  user_id: 2
)

Entry.create!(
  content: %q(I forgot I had started a diary. Going to update it for real this time.),
  create_date: today - 18,
  user_id: 2
)

Entry.create(
  content: %q(Today, I decided to start keeping a diary.),
  create_date: today - 31,
  user_id: 2
)